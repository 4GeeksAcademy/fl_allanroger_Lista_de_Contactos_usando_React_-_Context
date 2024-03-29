// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Contact } from "./views/contact";
// import { Demo } from "./views/demo";
// import injectContext from "./store/appContext";

// //create your first component
// const Layout = () => {
// 	//the basename is used when your project is published in a subdirectory and not in the root of the domain
// 	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
// 	const basename = process.env.BASENAME || "";

// 	return (
// 		<div>
// 			<BrowserRouter basename={basename}>
// 					<Routes>
// 						<Route path="/" element={<Contact />} />
// 						<Route path="/demo" element={<Demo />} />
// 						<Route path="*" element={<h1>Not found!</h1>} />
// 					</Routes>
// 			</BrowserRouter>
// 		</div>
// 	);
// };

// export default injectContext(Layout);

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./views/contact";
import { Demo } from "./views/demo";
import { EditContact } from "./views/editContact"; // Certifique-se de importar o componente EditContact
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/" element={<Contact />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/edit/:index" element={<EditContact />} /> {/* Adicione esta linha */}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
