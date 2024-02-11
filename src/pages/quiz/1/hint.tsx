import { useRouter } from 'next/router';

export default function Hint() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
        </>
    )
}