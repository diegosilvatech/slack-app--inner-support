const getFieldDataValue = (field) => {
  if (field.data.type === 'plain_text_input') {
    return field.data.value;
  } else {
    if (field.data.type === 'static_select') {
      return field.data.selected_option.value;
    }
  }
};

module.exports = {
  getFieldDataValue
};
