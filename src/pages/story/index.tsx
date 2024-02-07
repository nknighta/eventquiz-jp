import { useEffect } from "react";
import Layout from "../../layout/main";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
    useEffect(()=> {
        router.push('/quiz?id=1')
    },[])
    return (
        <Layout>
            クイズに戻っています...
        </Layout>
    )
}

export default Index;