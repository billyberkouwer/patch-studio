import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

const hookSecret = process.env.SANITY_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: string | undefined;
    }>(req, hookSecret);

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    console.log(body?._type, body?.slug);

    revalidateTag(body._type);

    if (body?._type === "termsAndConditions") {
      revalidatePath(`/terms-and-conditions`);
    } else if (body?._type === "siteMeta") {
      revalidatePath(`/`);
    } else if (body?._type === "home") {
      revalidatePath(`/`);
    } else if (body?._type === "bookings") {
      revalidatePath(`/bookings`);
    } else if (body?._type === "studio") {
      revalidatePath(`/studio`);
    } else if (body?._type === "contact") {
      revalidatePath(`/contact`);
    } else if (body?.slug) {
      revalidatePath(`/${body.slug}`);
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
