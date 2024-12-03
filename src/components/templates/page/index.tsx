import { PageContent } from './content'
import { PageHeader } from './header'
import { PageRoot } from './root'

type PageComponentType = typeof PageRoot & {
    Header: typeof PageHeader
    Content: typeof PageContent
}

export const Page: PageComponentType = Object.assign(PageRoot, {
    Header: PageHeader,
    Content: PageContent,
})
