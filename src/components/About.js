import "./About.css";

export default function About() {
	return (
		<div className={"aboutContainer"}>
			<h1 className={"rainbowText"}>About</h1>
			<div>
				Hello World, I go by HlloWrld and I am a Full Stack Web
				Developer with a focus on front end UX/UI and CSS. I am
				currently experimenting with Python and working to build Python
				applications in my spare time.
				<br></br>
				<br></br>I am a privacy advocate and aspiring cypherpunk,
				looking to contribute to opensource projects wherever possible.
				Design is my passion, and I aim to create beautiful clean web
				applications.
				<br></br>
				<br></br>
				<h2>Technologies</h2>
				<div className={"techWrapper"}>
					<div className={"techContainer"}>
						<h3>Front End</h3>
						<div className={"iconsAbout"}>
							<i className="devicon-html5-plain-wordmark"></i>
							<i class="devicon-css3-plain-wordmark"></i>
							<i class="devicon-bootstrap-plain-wordmark"></i>
							<i class="devicon-javascript-plain"></i>
							<i class="devicon-react-original-wordmark"></i>
							<i class="devicon-csharp-plain-wordmark"></i>
							<i class="devicon-javascript-plain"></i>
						</div>
					</div>
					<div className={"techContainer"}>
						<h3>Backend</h3>
						<div className={"icons"}>
							<i class="devicon-laravel-plain-wordmark"></i>
							<i class="devicon-dotnetcore-plain"></i>
							<i class="devicon-php-plain"></i>
							<i class="devicon-nodejs-plain-wordmark"></i>
						</div>
					</div>
					<div className={"techContainer"}>
						<h3>Database</h3>
						<div className={"icons"}>
							<i class="devicon-mysql-plain-wordmark"></i>
							<i class="devicon-sqlite-plain-wordmark"></i>
						</div>
					</div>
					<div className={"techContainer"}>
						<h3>Hosting</h3>
						<div className={"icons"}>
							<i class="devicon-azure-plain-wordmark"></i>
							<i class="devicon-googlecloud-plain-wordmark"></i>
							<i class="devicon-heroku-plain-wordmark"></i>
						</div>
					</div>
					<div className={"techContainer"}>
						<h3>Other</h3>
						<div className={"icons"}>
							<i class="devicon-docker-plain-wordmark"></i>
							<i class="devicon-git-plain-wordmark"></i>
							<i class="devicon-visualstudio-plain"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
