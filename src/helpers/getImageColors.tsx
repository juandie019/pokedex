import ImageColors from 'react-native-image-colors';


export const getImagePrimaryColor = async (uri: string) => {
    const colors = await ImageColors.getColors(uri, { fallback: 'grey' });

    let primary;

    if (colors.platform === 'android'){
        primary = colors.dominant;
    } else if (colors.platform === 'ios'){
        primary = colors.background;
    }

    return primary;
};
