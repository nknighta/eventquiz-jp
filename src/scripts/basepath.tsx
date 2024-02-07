import Link from "next/link";

const BathPath = ({children, pagepath}:any) => {
	const processablelink = process.env.GITHUB_PARGS ? "https://cidschool.github.io/cid-expo-quiz/" : "/"
	return (
		<Link href={ processablelink + pagepath}>
			{children}
		</Link>
	)
}

export default BathPath;
