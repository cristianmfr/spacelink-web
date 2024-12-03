/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CaretDown, CaretUp, NoteBlank } from '@phosphor-icons/react'
import {
    Column,
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import clsx from 'clsx'
import { SearchInput } from './search-input'

export type ColumnTitle = {
    id: string
    header: string
}

export type Filters = {
    title: string
    value: string
    checked: boolean
}

export type FiltersDefault = {
    column: string
    value: string
}

type TableProps<T> = {
    data: T[]
    columns: ColumnDef<T, string>[]
    columnsTitle: ColumnTitle[]
    rowSelection?: any
    onRowClick?: (row: T) => void
    filtersDefault?: FiltersDefault
    onRowSelectionChange?: Dispatch<SetStateAction<NonNullable<unknown>>>
    toggleFilter?: boolean
    handleToggle?: () => void
    toggleValue?: boolean
    hideHeader?: boolean
}

export const Table = <T extends object>({
    data,
    columns,
    columnsTitle,
    onRowClick,
    filtersDefault,
    rowSelection,
    onRowSelectionChange,
    hideHeader = false,
}: TableProps<T>) => {
    const [filtersChecked, setFiltersChecked] = useState<number>(0)
    const [filters, setFilters] = useState<
        {
            name: string
            column: Column<T, unknown>
            filters: Filters[]
        }[]
    >([])
    const [globalFilter, setGlobalFilter] = useState('')
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter,
            rowSelection,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        enableRowSelection: true,
        onRowSelectionChange: onRowSelectionChange,
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
    })

    useEffect(() => {
        const tableFacets: {
            name: string
            column: Column<T, unknown>
            filters: Filters[]
        }[] = []
        table.setPageSize(12)
        table.getHeaderGroups().map((headerGroup) => {
            if (filters.length === 0) {
                headerGroup.headers.map(({ column }) => {
                    if (column.getCanFilter()) {
                        const facets = Array.from(
                            column.getFacetedUniqueValues().keys()
                        ).sort()
                        tableFacets.push({
                            name:
                                columnsTitle?.filter(
                                    (c) => column.id === c.id
                                )[0]?.header ?? '',
                            column: column,
                            filters: facets.map((facet) => {
                                if (filtersDefault?.value === facet) {
                                    setFiltersChecked(filtersChecked + 1)
                                }
                                return {
                                    title: facet,
                                    value: facet,
                                    checked: filtersDefault?.value === facet,
                                }
                            }),
                        })
                    }
                })
            }
        })
        setFilters(tableFacets)
    }, [])

    useEffect(() => {
        if (
            filtersDefault?.column &&
            filtersDefault?.value &&
            filters.length > 0
        ) {
            const column = table.getColumn(filtersDefault?.column)
            column?.setFilterValue(filtersDefault?.value)

            const index = filters.findIndex(
                (filter) =>
                    filter.name.toLocaleLowerCase() ===
                    filtersDefault?.column.toLocaleLowerCase()
            )
            filters[index].filters.map((filter) => {
                filter.checked = filter.value === filtersDefault?.value
            })
            setFilters([...filters])

            setFiltersChecked(
                filters
                    .map(
                        (filter) =>
                            filter.filters.filter((f) => f.checked).length
                    )
                    .reduce((a, b) => a + b, 0)
            )
        }
    }, [filtersDefault])

    return (
        <div className='flex flex-col w-full'>
            {table.getRowModel().rows.length !== 0 && (
                <div className='flex flex-row w-1/3 mb-xxxs'>
                    <SearchInput placeholder='Nome, identificador, instituição...' />
                </div>
            )}
            {table.getRowModel().rows.length === 0 ? (
                <div className='flex flex-col w-full items-center justify-center p-xs text-gray-400'>
                    <NoteBlank size={62} />
                    <span className='text-sm'>Nenhum dado cadastrado aqui</span>
                </div>
            ) : (
                <table className='w-full border-separate border-spacing-y-1.5'>
                    {!hideHeader && (
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id}>
                                            {header.isPlaceholder ? null : (
                                                <div
                                                    {...{
                                                        className:
                                                            header.column.getCanSort()
                                                                ? 'text-xsx select-none text-secondary-dark font-semibold antialiased flex items-center justify-start'
                                                                : '',
                                                    }}
                                                >
                                                    {flexRender(
                                                        header.column.columnDef
                                                            .header,
                                                        header.getContext()
                                                    )}
                                                    {{
                                                        asc: (
                                                            <CaretUp
                                                                size={16}
                                                            />
                                                        ),
                                                        desc: (
                                                            <CaretDown
                                                                size={16}
                                                            />
                                                        ),
                                                    }[
                                                        header.column.getIsSorted() as string
                                                    ] ?? null}
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                    )}
                    <tbody className='space-y-2'>
                        {table.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                                className={clsx(
                                    'items-center',
                                    onRowClick && 'cursor-pointer'
                                )}
                                onClick={() => onRowClick?.(row.original)}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className={clsx(
                                            'h-md text-xsx text-white font-normal antialiased border-b-thin border-secondary-dark/10'
                                        )}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
