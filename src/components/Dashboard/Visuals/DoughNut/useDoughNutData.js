
import { getAssetsMock } from '../../../../mock/getAssetsMock'
import { getPortfolioMock } from '../../../../mock/getPortfolioMock'

const useDoughNutData = () => {
    const assetsData = getAssetsMock.data.positions;
    const portfolioData = getPortfolioMock.data.portfolios;
  
    // Get unique asset types
    const assetLabel = [...new Set(assetsData.map(asset => asset.type))];
  
    // Get unique individual labels
    const individualLabel = [...new Set(portfolioData.map(asset => asset.asset))];
  
    // Calculate individual data
    const individualData = portfolioData.map(asset => asset.price * asset.quantity);
  
    // Calculate sum by type
    const sumByType = assetsData.reduce((acc, asset) => {
      const index = acc.findIndex(item => item.type === asset.type);
  
      if (index === -1) {
        acc.push({ type: asset.type, sum: asset.value, assets: [asset] });
      } else {
        acc[index].sum += asset.value;
        acc[index].assets.push(asset);
      }
  
      return acc;
    }, []);
  
    // Extract asset data from sumByType
    const assetData = sumByType.map(item => item.sum);
  
    return {
      assetLabel,
      individualLabel,
      assetData,
      individualData,
    };
  };

export default useDoughNutData