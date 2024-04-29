function getElementWidth (content, padding, border){
   const content_width = parseFloat(content);
    const padding_width = parseFloat(padding) * 2;
    const border_width = parseFloat(border) * 2;
    const total_width = content_width + padding_width + border_width;
    return total_width;
}
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));


