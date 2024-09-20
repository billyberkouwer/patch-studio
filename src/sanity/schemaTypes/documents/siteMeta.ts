import {defineType} from 'sanity'
import Meta from '../objects/meta'
import SiteSettings from '../objects/siteSettings'
import openGraph from '../objects/opengraph'
import GoogleAnalytics from '../objects/googleAnalytics'

const SiteMeta = defineType({
  type: 'document',
  name: 'siteMeta',
  title: 'Site Configuration',
  fieldsets: [
    {
      name: 'google',
      title: 'Google Analytics',
      hidden: ({document}) => !document?.isGoogleAnalyticsEnabled,
    },
  ],
  groups: [
    {
      name: 'meta',
      title: 'Site Info',
      default: true,
    },
    {
      name: 'og',
      title: 'Social Share Info',
    },
    {
      name: 'google',
      title: 'Google Config',
      hidden: ({document}) => !document?.isGoogleAnalyticsEnabled,
    },
  ],
  fields: [
    ...Meta.fields,
    ...SiteSettings.fields,
    ...openGraph.fields,
    ...GoogleAnalytics.fields,
  ],
})

export default SiteMeta
