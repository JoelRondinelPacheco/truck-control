import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { chevronIcon } from "../../../components/icons/chevron";

function TypeButton() {
  return (
    <DropdownMenu.Root>
            <DropdownMenu.Trigger className="hover:cursor-pointer px-4 py-1 rounded-md bg-main">
                <div className="flex items-center gap-2">
                  <span className="pb-[2px]">
                    {chevronIcon({ width: "1.3em", height: "1.3em" })}
                  </span>
                  <span>Tipo</span>
                </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="bg-slate-700">
                <DropdownMenu.Item>Tipo 1</DropdownMenu.Item>
                <DropdownMenu.Item>Tipo 1</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
  )
}

export default TypeButton