import SelectField from "../../../Components/SelectField";
import TextInput from "../../../Components/TextInput";

const RegisterPage = () => {
  const months = [
    { value: "1", label: "January", days: Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 })) },
    { value: "2", label: "February", days: Array.from({ length: 28 }, (_, i) => ({ value: i + 1, label: i + 1 })) },
    { value: "3", label: "March", days: Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 })) },
    { value: "4", label: "April", days: Array.from({ length: 30 }, (_, i) => ({ value: i + 1, label: i + 1 })) },
    { value: "5", label: "May", days: Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 })) },
    { value: "6", label: "June", days: Array.from({ length: 30 }, (_, i) => ({ value: i + 1, label: i + 1 })) },
    { value: "7", label: "July", days: Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 })) },
    { value: "8", label: "August", days: Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 })) },
    { value: "9", label: "September", days: Array.from({ length: 30 }, (_, i) => ({ value: i + 1, label: i + 1 })) },
    { value: "10", label: "October", days: Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 })) },
    { value: "11", label: "November", days: Array.from({ length: 30 }, (_, i) => ({ value: i + 1, label: i + 1 })) },
    { value: "12", label: "December", days: Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 })) },
  ];
  
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="p-3 rounded-lg bg-[#F9F9F9] w-[400px] h-[600px]">
        <p className="text-[#5C2684] font-bold md:text-sm text-xs ">
          Create an Account
        </p>
        <div className="my-2">
          <form className="space-y-2 ">
            <div className="flex gap-2">
              <TextInput label={"First Name "} />
              <TextInput label={"Surname "} />
            </div>
            <div className="flex gap-2">
              <div className="space-y-1">
                <p>Date of Birth</p>
                <SelectField label="Select Month" options={months} months={months}  />

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
