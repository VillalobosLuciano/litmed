import CMS from 'netlify-cms-app'
import EspecialistPreview from './preview-templates/EspecialistPreview'
import ServicePreview from './preview-templates/ServicePreview'

CMS.registerPreviewTemplate('especialists', EspecialistPreview)
CMS.registerPreviewTemplate('services', ServicePreview)