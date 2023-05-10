const _ = require('lodash');

const getExecutionTypeForProductList = ({
  primaryCategory = "",
  secondaryCategory = "",
  isProductSearch = false,
  isCategorySearch = false,
  selectedPricing = {},
  selectedCatalogueName = ""
}) => {

  let executionType = "";

  let isPrimaryCategoryNotEmpty = !_.isEmpty(primaryCategory);

  let isSecondaryCategoryNotEmpty = !_.isEmpty(secondaryCategory);

  let isPricingFilterNotEmpty = !_.isEmpty(selectedPricing);

  if (isProductSearch) {
    executionType = "PRODUCT_NAME_FILTER";
  } else if (!_.isEmpty(selectedCatalogueName)) {
    executionType = "CATALOGUE_NAME_FILTER";
  } else if (isPrimaryCategoryNotEmpty && isSecondaryCategoryNotEmpty && isPricingFilterNotEmpty) {
    executionType = "CATEGORY_WITH_PRICING_FILTER";
  } else if (isPrimaryCategoryNotEmpty && isSecondaryCategoryNotEmpty) {
    executionType = "CATEGORY_FILTER";
  } else if (isPrimaryCategoryNotEmpty && isPricingFilterNotEmpty) {
    executionType = "PRIMARY_CATEGORY_WITH_PRICING_FILTER";
  } else if (isSecondaryCategoryNotEmpty && isPricingFilterNotEmpty) {
    executionType = "SECONDARY_CATEGORY_WITH_PRICING_FILTER";
  } else if (isPricingFilterNotEmpty) {
    executionType = "PRICING_FILTER";
  } else if (isPrimaryCategoryNotEmpty) {
    executionType = "PRIMARY_FILTER";
  } else if (isSecondaryCategoryNotEmpty) {
    executionType = "SECONDARY_FILTER";
  } else {
    executionType = 'DEFAULT'
  }

  return executionType;
}

const getUpdatedSecondaryCategoryList = (category2, formulaeList) => {

  let updatedList = [];

  category2.map(item => {

    let uniqueId = _.get(item, 'S.No');

    let categoryName = _.get(item, 'Category2');

    let primaryCategory = formulaeList.find(list => _.get(list, 'Cat2 _id') == uniqueId);

    updatedList.push({
      'S.No': uniqueId,
      Category2: categoryName,
      primaryCategory: _.get(primaryCategory, 'Cat1_id')
    })

  })

  return updatedList;
}

module.exports = { getExecutionTypeForProductList, getUpdatedSecondaryCategoryList }