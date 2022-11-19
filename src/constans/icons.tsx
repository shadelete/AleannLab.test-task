function * iconConstructor (localPath:string,style:string,alt:string) {
	return <img src={require(localPath).default}/>
}

export const RatingIcon = () => {
	return <img src={require("../assets/img/icons/star.svg").default} alt="Rating"/>
}

// export const RatingIcon = () => iconConstructor("../assets/img/icons/star.svg",'','star')

export const LocationIcon = () => {
	return <img src={require("../assets/img/icons/location.svg").default} alt="Location"/>
}

export const LeftIcon = () => {
	return <img src={require("../assets/img/icons/left-arrow.svg").default} alt="Previous"/>
}

export const RightIcon = () => {
	return <img src={require("../assets/img/icons/right-arrow.svg").default} alt="Next"/>
}

export const BookmarkIcon = () => {
	return <img src={require("../assets/img/icons/bookmark.svg").default} alt="Next"/>
}

export const ButtonArrowIcon = () => {
	return <img src={require("../assets/img/icons/button-arrow.svg").default} alt="Next"/>
}

export const ShareIcon = () => {
	return <img src={require("../assets/img/icons/share.svg").default} alt="Next"/>
}