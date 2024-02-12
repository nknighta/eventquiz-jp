import { useRouter } from 'next/router';
import Layout from '../../../layout/main';

export default function Hint() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout>
            {id}
        </Layout>
    )
}

// パターン1
function P1 () {
    
}