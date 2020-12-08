const convertPosition = (data) => {
    let convertedValue = ''
    switch (data) {
        case 'full':
            convertedValue = '풀스택'
            break;
        case 'front':
            convertedValue = '프론트엔드'
            break;
        case 'back':
            convertedValue = '백엔드'
            break;
        default:
            break;
    }

    return convertedValue
}

const convertType = (data) => {
    let convertedValue = ''
    switch (data) {
        case 'side':
            convertedValue = '개인'
            break;
        case 'team':
            convertedValue = '팀'
            break;
        default:
            break;
    }

    return convertedValue
}

const dataURLtoFile = (dataurl, fileName) => {

    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });
}

export { convertPosition, convertType, dataURLtoFile }

