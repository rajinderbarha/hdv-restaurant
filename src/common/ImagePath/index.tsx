const ImagePath = async (imgName: string) => {
    return import(`@/assets/image/${imgName}`);
}

export default ImagePath;
