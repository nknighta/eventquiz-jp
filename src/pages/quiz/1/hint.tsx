import { useRouter } from 'next/router';
import Layout from '../../../layout/main';

export default function Hint() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout>
            {id == "1" ? <P1/>: <>222</>}
        </Layout>
    )
}

// パターン1
function P1() {
    return (
        <>
            p1
        </>
    )
}