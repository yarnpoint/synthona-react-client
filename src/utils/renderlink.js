export const renderlink = (renderlink) => {
	let type = renderlink.split("/")[4];
	let uuid = renderlink.split("/")[5];

	switch (type) {
		case "text":
			window.location.replace(`/edit/text/${uuid}`);
			break;
		case "file":
			window.location.replace(`/launch-file/${uuid}`);
			break;
		case "audio":
			window.location.replace(`/launch-file/${uuid}`);
			break;
		case "folder":
			window.location.replace(`/launch-file/${uuid}`);
			break;
		case "image":
			window.location.replace(`/associations/${uuid}`);
			break;
		case "collection":
			window.location.replace(`/associations/${uuid}`);
			break;
		case "zip":
			window.location.replace(`/associations/${uuid}`);
			break;
		case "package":
			window.location.replace(`/associations/${uuid}`);
			break;
		case "user":
			window.location.replace(`/associations/${uuid}`);
			break;
		default:
			window.open(renderlink, "_blank");
			break;
	}
};
