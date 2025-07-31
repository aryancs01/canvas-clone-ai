import EditorClientPage from "./_components/EditorClient";

interface EditorProjectIdPageProps {
    params:Promise<{projectId:string}>
}

export default async function EditorProjectIdPage({params}:EditorProjectIdPageProps){
    const { projectId } = await params

    return (
       <EditorClientPage id={projectId}/>
    )
}
