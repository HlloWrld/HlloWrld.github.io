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
							<i class="devicon-html5-plain-wordmark"></i>
							<i className="devicon-css3-plain-wordmark"></i>
							<i className="devicon-bootstrap-plain-wordmark"></i>
							<i className="devicon-javascript-plain"></i>
							<i className="devicon-react-original-wordmark"></i>
							<i className="devicon-csharp-plain-wordmark"></i>
							<i className="devicon-javascript-plain"></i>
						</div>
					</div>
					<div className={"techContainer"}>
						<h3>Backend</h3>
						<div className={"iconsAbout"}>
							<i className="devicon-laravel-plain-wordmark"></i>
							<i className="devicon-dotnetcore-plain"></i>
							<i className="devicon-php-plain"></i>
							<i className="devicon-nodejs-plain-wordmark"></i>
						</div>
					</div>
					<div className={"techContainer"}>
						<h3>Database</h3>
						<div className={"iconsAbout"}>
							<i className="devicon-mysql-plain-wordmark"></i>
							<i className="devicon-sqlite-plain-wordmark"></i>
						</div>
					</div>
					<div className={"techContainer"}>
						<h3>Hosting</h3>
						<div className={"iconsAbout"}>
							<i className="devicon-azure-plain-wordmark"></i>
							<i className="devicon-googlecloud-plain-wordmark"></i>
							<i className="devicon-heroku-plain-wordmark"></i>
						</div>
					</div>
					<div className={"techContainer"}>
						<h3>Other</h3>
						<div className={"iconsAbout"}>
							<i className="devicon-docker-plain-wordmark"></i>
							<i className="devicon-git-plain-wordmark"></i>
							<i className="devicon-visualstudio-plain"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
