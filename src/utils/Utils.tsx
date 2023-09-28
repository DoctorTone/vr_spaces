const getDeviceStatus = () => {
	// See if mobile
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch (error) {
		// Must be desktop
		return false;
	}
};

export { getDeviceStatus };
