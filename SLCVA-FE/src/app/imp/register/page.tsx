"use client";
import { Button, Input, Tooltip } from "@nextui-org/react";
import React , {useState} from "react";
import {z} from "zod";

 
export default function Form (){

    
    const [name, setName] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");
    const [license, setLicense] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [password, setPassword] = useState("");   
    const [selectfile, setSelectFile] = useState<File | null>(null);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string[]>([]); 

    const FormSchema = z.object({
        name: z.string().min(3, {message: "Name must be at least 3 characters long"}),
        nic: z.string().min(10, {message: "NIC number must be at least 10 characters long"}),
        email: z.string().email({message: "Invalid email address"}),
        license: z.string().min(5, {message: "License number must be at least 5 characters long"}),
        phone: z.string().min(10, {message: "Invalid Phone number"}),
        website: z.string().url({message: "Invalid website URL"}),
        password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
        confirmPassword: z.string().min(6, {message: "Password must be at least 6 characters long"}),
       
    });

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log("Submitted form data:");
        console.log({ name,nic, email, license, phone, website, password, confirmPassword, additionalInfo,selectfile });

        if(password !== confirmPassword){
            setError(["Passwords do not match"]);
            setIsSubmitting(false);
            return;
        }


        // submit to the server
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setName("");
        setNic("");
        setEmail("");
        setLicense("");
        setPhone("");
        setWebsite("");
        setPassword("");
        setConfirmPassword("");
        setAdditionalInfo("");
        setSelectFile(null);
        setIsSubmitting(false);

         }

    
    
    
   return(

    <form  onSubmit={handleSubmit} className="max-w-[600px] space-y-6 mx-auto">
        <h1 className="text-2xl font-semibold " >Registration Request Form</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
 
     
        
        {
            error.length > 0 &&(
                <ul>
                    {error.map((err) => (
                        <li key={err} className="text-red-500">{err}</li>
                    ))}
                </ul>
            )

        }

        <Input
            label="Full Name"
            name="fullName"
            value={name}
            // update the name state with the value of the input
            onChange={(e) => setName(e.target.value)} 
            placeholder="Full Name"
            autoFocus
          /> 

          <Input
            label="NIC"
            value={nic}
            onChange={(e) => setName(e.target.value)} 
            name="nic"
            placeholder="NIC"
          />

          <Input
                label="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                name="website"
                placeholder="abs.com"
              />

           <Input
                label="Licence Number"
                value={license}
                onChange={(e) => setLicense(e.target.value)}
                name="licenceNumber"
                placeholder="Licence Number"
              />

          <Input
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="example@gmail.com"
            type="email"
            
          />

 
 
           <Input
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            placeholder="+94 123 456 678"
            type="phone"
             
          />

           <Input
          label = "Additional Text"
          value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            name="additionalInfo"
            placeholder="Additional Information"
            
          />

        <Tooltip
                placement="bottom"
                content={
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">
                      Upload Medical Documents
                    </div>
                    <div className="text-tiny text-slate-500 mt-1">
                      Documents should prove the situation. <br /> Only image
                      formats and PDFs are allowed. <br />
                      <span className="text-red-600">
                        Files must be less than 1 MB in size.
                      </span>
                    </div>
                  </div>
                }
                >

                <Input
                id="medicalDocuments"
                type="file"
                onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                        setSelectFile(e.target.files[0]);
                    }
                }}
                name="medicalDocuments"
                label="Medical Documents"
            />
              </Tooltip>
              </div>
              
        <div className="flex flex-col items-center space-y-6">
          <Input
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
            type="password"
            
          />
          <Input
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
             
          />

        
    
        <div className="flex gap-5">
            <Button
              size="md"
              className="text-center"
              type="submit"
              onClick={handleSubmit}
              variant="shadow"
            >
              Submit
            </Button>
        </div>
        </div>

       </form>
     
 
  );
}