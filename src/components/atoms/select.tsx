/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactSelect from 'react-select'
import clsx from 'clsx'
import { Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'

interface SelectProps {
    label?: string
    placeholder?: string
    options: any[]
    width?: 'small' | 'medium' | 'large' | 'full' | 'auto'
    variant?: 'default' | 'alternative'
    control?: any
    name: string
    value?: string | string[]
    handleChange?: (value: any) => void
    error?: string
    isMulti?: boolean
}

export const Select = ({
    label,
    width = 'full',
    options,
    placeholder,
    control,
    name,
    value,
    variant = 'default',
    handleChange,
    error,
    isMulti,
}: SelectProps) => {
    const [selectedOption, setSelectedOption] = useState<any>(null)

    useEffect(() => {
        const valueExists = options.find((c) => c.value === value)
        if (valueExists) {
            setSelectedOption(valueExists.value)
        } else {
            setSelectedOption(null)
        }
    }, [options, value])

    if (variant === 'alternative') {
        return (
            <div
                className={clsx(
                    width === 'small' && 'w-[20px]',
                    width === 'medium' && 'w-[300px]',
                    width === 'large' && 'w-[400px]',
                    width === 'full' && 'w-full',
                    width === 'auto' && 'w-auto',
                    'flex flex-col'
                )}
            >
                {label && (
                    <span className='font-medium antialiased text-xsx text-[#828D9E]'>
                        {label}
                    </span>
                )}
                <div
                    className={clsx(
                        'flex flex-row w-full items-center h-[48px] border-b-thin border-[#DEDEDE] bg-transparent'
                    )}
                >
                    <Controller
                        control={control}
                        defaultValue={selectedOption}
                        name={name}
                        render={({ field: { name, ref, value, onChange } }) => {
                            return (
                                <ReactSelect
                                    ref={ref}
                                    className='w-full font-light text-xxs text-nowrap'
                                    options={options}
                                    name={name}
                                    placeholder={placeholder}
                                    value={
                                        isMulti
                                            ? value
                                            : options.find(
                                                  (c) =>
                                                      c.value ===
                                                          selectedOption ||
                                                      c.value === value
                                              ) || ''
                                    }
                                    onChange={(val) => {
                                        onChange(isMulti ? val : val.value)

                                        handleChange &&
                                            handleChange(
                                                isMulti ? val : val.value
                                            )
                                    }}
                                    styles={{
                                        control: (baseStyles) => ({
                                            ...baseStyles,
                                            outline: 'none',
                                            borderColor: 'transparent',
                                            backgroundColor: 'transparent',
                                            height: '52px',
                                            border: 0,
                                            boxShadow: 'none',
                                        }),
                                        valueContainer: (baseStyles) => ({
                                            ...baseStyles,
                                            fontSize: '16px',
                                            fontWeight: '400',
                                            padding: 0,
                                        }),
                                        placeholder: (baseStyles) => ({
                                            ...baseStyles,
                                            fontSize: '16px',
                                            fontWeight: 300,
                                            color: '#D6E0EA',
                                            padding: 0,
                                        }),
                                        option: (baseStyles) => ({
                                            ...baseStyles,
                                            fontSize: '16px',
                                        }),
                                    }}
                                    components={{
                                        IndicatorSeparator: () => null,
                                    }}
                                />
                            )
                        }}
                    />
                </div>
                {error && (
                    <span className='text-red-pure text-xxs font-light'>
                        {error}
                    </span>
                )}
            </div>
        )
    }

    if (variant === 'default') {
        return (
            <div
                className={clsx(
                    width === 'small' && 'w-[20px]',
                    width === 'medium' && 'w-[300px]',
                    width === 'large' && 'w-[400px]',
                    width === 'full' && 'w-full',
                    width === 'auto' && 'w-auto',
                    'flex flex-col gap-2'
                )}
            >
                {label && (
                    <span className='text-xs font-medium antialiased'>
                        {label}
                    </span>
                )}
                <div
                    className={clsx(
                        'flex flex-row w-full items-center h-[52px] border-thin border-high-dark rounded-sm bg-high-light'
                    )}
                >
                    <Controller
                        control={control}
                        defaultValue={selectedOption}
                        name={name}
                        render={({ field: { name, ref, onChange, value } }) => {
                            return (
                                <ReactSelect
                                    ref={ref}
                                    className='w-full font-light text-xxs'
                                    options={options}
                                    name={name}
                                    placeholder={placeholder}
                                    value={
                                        isMulti
                                            ? value
                                            : options.find(
                                                  (c) =>
                                                      c.value ===
                                                          selectedOption ||
                                                      c.value === value
                                              ) || ''
                                    }
                                    onChange={(val) => {
                                        onChange(isMulti ? val : val.value)
                                        handleChange &&
                                            handleChange(
                                                isMulti ? val : val.value
                                            )
                                    }}
                                    styles={{
                                        control: (baseStyles) => ({
                                            ...baseStyles,
                                            outline: 'none',
                                            borderColor: 'transparent',
                                            backgroundColor: 'transparent',
                                            height: '52px',
                                            borderRadius: '14px',
                                            border: 0,
                                            boxShadow: 'none',
                                            paddingLeft: '8px',
                                            paddingRight: '8px',
                                        }),
                                        menu: (baseStyles) => ({
                                            ...baseStyles,
                                            paddingLeft: '3.5px',
                                            paddingRight: '3.5px',
                                            borderRadius: '14px',
                                        }),
                                        option: (baseStyles) => ({
                                            ...baseStyles,
                                            borderRadius: '12px',
                                            marginBottom: '4px',
                                        }),
                                    }}
                                    components={{
                                        IndicatorSeparator: () => null,
                                    }}
                                />
                            )
                        }}
                    />
                </div>
            </div>
        )
    }
}
