import CMS from 'netlify-cms-app'
import SpecialistPreview from './preview-templates/SpecialistPreview'
import ServicePreview from './preview-templates/ServicePreview'

CMS.registerPreviewTemplate('specialists', SpecialistPreview)
CMS.registerPreviewTemplate('services', ServicePreview)