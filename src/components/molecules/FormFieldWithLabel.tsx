// Components
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// Types
import { IongCategory } from "@/app/(public-routes)/(ongs)/schema/ongSchema";

interface FormFieldWithLabelProps {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  textarea?: boolean;
  renderSelect?: boolean;
  className?: string;
}

const FormFieldWithLabel = ({
  control,
  name,
  label,
  placeholder,
  textarea,
  renderSelect,
  className,
}: FormFieldWithLabelProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {textarea ? (
              <Textarea
                placeholder={placeholder}
                className='h-52 resize-none'
                {...field}
              />
            ) : renderSelect ? (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(IongCategory).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input placeholder={placeholder} {...field} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldWithLabel;
