import { Button } from '../../../../../components/atoms/button'
import { Table } from '../../../../../components/molecules/table'
import { Page } from '../../../../../components/templates/page'

export const GroupsList = () => {
    return (
        <Page>
            <Page.Header title='Grupos'>
                <Button onClick={() => {}}>novo grupo</Button>
            </Page.Header>
            <Page.Content>
                <div className='flex flex-col w-full p-xs bg-gray-900 rounded-lg border-thin border-gray-800'>
                    <Table data={[]} columns={[]} columnsTitle={[]} />
                </div>
            </Page.Content>
        </Page>
    )
}
