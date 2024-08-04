import ColumnText from "@/components/global/ColumnText";
import PageTitle from "@/components/global/PageTitle";
import Tagline from "@/components/global/Tagline";
import ScrollingImages from "@/components/image/ScrollingImages";
import { columnText, images } from "@/utils/constants";

export default function EditorialPage() {
  return (
    <div className="page__wrapper">
      <PageTitle>Editorial</PageTitle>
      <Tagline>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
        aspernatur consequatur perferendis saepe unde itaque quam aliquid.
      </Tagline>
      <ColumnText textArr={columnText} />
      <ScrollingImages images={images} />
    </div>
  );
}
