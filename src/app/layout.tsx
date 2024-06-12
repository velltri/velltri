import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: {
		default: "Velltri - Soluções em Inteligência Artificial para Transformar Negócios",
		template: "%s | Velltri",
	},
	description:
		"Desenvolvemos soluções inovadoras utilizando inteligência artificial para transformar e melhorar empresas. Descubra como nossas soluções podem impulsionar seu negócio.",
	keywords: [
		"Inteligência Artificial",
		"Machine Learning",
		"Soluções em IA",
		"Transformação Digital",
		"Desenvolvimento de Software",
		"Consultoria em IA",
		"Data Science",
		"Big Data",
		"UI/UX",
		"Análise de Dados",
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
