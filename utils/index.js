const _ = require('lodash');

const getExecutionTypeForProductList = ({
  primaryCategory = "",
  secondaryCategory = "",
  isProductSearch = false,
  isCategorySearch = false,
  selectedPricing = {}
}) => {

  let executionType = "";

  let isPrimaryCategoryNotEmpty = !_.isEmpty(primaryCategory);

  let isSecondaryCategoryNotEmpty = !_.isEmpty(secondaryCategory);

  let isPricingFilterNotEmpty = !_.isEmpty(selectedPricing);

  if (isProductSearch) {
    executionType = "PRODUCT_NAME_FILTER";
  } else if (isCategorySearch) {
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

module.exports = { getExecutionTypeForProductList }