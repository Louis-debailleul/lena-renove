import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { FormItem, FormLabel, FormControl, FormMessage } from "./form";
import { cn } from "../../lib/utils";

const CustomRadioGroup = ({ name, value, onChange, options, className }) => {
  return (
    <RadioGroup
      onValueChange={(value) => onChange(name, value)}
      value={value}
      className={cn("flex flex-wrap gap-2", className)}
    >
      {options.map((option) => (
        <FormItem
          key={option.value}
          className={`space-y-0  flex items-center w-fit rounded-md p-2 cursor-pointer ${
            value === option.value
              ? "border-2 border-secondary bg-secondary text-white"
              : "border-2 border-gray-100"
          }`}
        >
          <FormControl>
            <RadioGroupItem value={option.value} />
          </FormControl>
          <FormLabel className="font-normal whitespace-nowrap">
            {option.label}
          </FormLabel>
        </FormItem>
      ))}
    </RadioGroup>
  );
};

export default CustomRadioGroup;
