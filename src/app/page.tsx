import Image from "next/image"
import Logo from "@/../public/logo.svg"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Home() {
	return (
		<main className="w-dvw h-dvh">
			<div>
				<div>
					<Image src={Logo} alt="Velltri logo" />
				</div>
				<div>
					<h2>Entre em contato</h2>
					<div>
						<Link href="mailto:contato@velltri.com">contato@velltri.com</Link>
						<Link href="https://api.whatsapp.com/send?phone=557399301800&text=Quero%20marcar%20uma%20reuni%C3%A3o%20com%20a%20Velltri">
							(73) 9 9930-1800
						</Link>
						<div className="flex gap-4">
							<Link href="https://github.com/velltri">
								<FaGithub />
							</Link>
						</div>
					</div>
				</div>
				<div>
					<Link href="mailto:contato@velltri.com">Clique para enviar um email</Link>
				</div>
			</div>
		</main>
	)
}
