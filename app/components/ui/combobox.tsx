"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export type ComboBoxOption = {
  value: string
  label: string
  [key: string]: unknown
}

type ComboBoxProps = {
  options: ComboBoxOption[]
  selectedValue: string | string[]
  onChange: (value: string | string[]) => void
  multiselect?: boolean
  placeholder?: string
  searchPlaceholder?: string
  className?: string
}

export function ComboBox({
  options,
  selectedValue,
  onChange,
  multiselect = false,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
  className = "",
}: ComboBoxProps) {
  const [open, setOpen] = React.useState(false)
  const isSelected = React.useCallback(
    (value: string) =>
      multiselect
        ? Array.isArray(selectedValue) && selectedValue.includes(value)
        : selectedValue === value,
    [selectedValue, multiselect]
  )

  const handleSelect = (option: ComboBoxOption) => {
    if (multiselect) {
      if (!Array.isArray(selectedValue)) return
      if (selectedValue.includes(option.value)) {
        onChange(selectedValue.filter((v) => v !== option.value))
      } else {
        onChange([...selectedValue, option.value])
      }
    } else {
      onChange(option.value)
      setOpen(false)
    }
  }

  const displayValue = () => {
    if (multiselect && Array.isArray(selectedValue)) {
      const selectedOptions = options.filter((o) => selectedValue.includes(o.value))
      return selectedOptions.length > 0 ? selectedOptions.map((o) => o.label).join(", ") : placeholder
    } else {
      const selectedOption = options.find((o) => o.value === selectedValue)
      return selectedOption ? selectedOption.label : placeholder
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="noShadow"
          role="combobox"
          aria-expanded={open}
          className={`w-fit min-w-[280px] justify-between ${className}`}
        >
          {displayValue()}
          <ChevronsUpDown className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 border-0" align="start">
        <Command className="**:data-[slot=command-input-wrapper]:h-11">
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup className="p-2 [&_[cmdk-group-items]]:flex [&_[cmdk-group-items]]:flex-col [&_[cmdk-group-items]]:gap-1">
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => handleSelect(option)}
                >
                  {multiselect && (
                    <div
                      className="border-border pointer-events-none size-5 shrink-0 rounded-base border-2 transition-all select-none *:[svg]:opacity-0 data-[selected=true]:*:[svg]:opacity-100 mr-2"
                      data-selected={isSelected(option.value)}
                    >
                      <CheckIcon className="size-4 text-current" />
                    </div>
                  )}
                  {option.label}
                  {!multiselect && isSelected(option.value) && (
                    <CheckIcon className="ml-auto size-4 text-current" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
