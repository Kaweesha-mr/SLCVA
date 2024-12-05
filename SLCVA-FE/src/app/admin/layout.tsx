import DefaultLayout from "@/components/Layouts/DefaultLayout";

const ProjectLayout = ({children}:any) => {
    return ( 
        <DefaultLayout>
            {children}
        </DefaultLayout>
     );
}
 
export default ProjectLayout;