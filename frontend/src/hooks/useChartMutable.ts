import { PANEL_TYPES } from 'constants/queryBuilder';
import { PanelTypeAndGraphManagerVisibilityProps } from 'container/GridGraphLayout/Graph/FullView/types';
import { PanelTypeKeys } from 'types/common/queryBuilder';

export const useChartMutable = ({
	panelType,
	panelTypeAndGraphManagerVisibility,
}: UseChartMutableProps): boolean => {
	const panelKeys = Object.keys(PANEL_TYPES) as PanelTypeKeys[];
	const graphType = panelKeys.find(
		(key: PanelTypeKeys) => PANEL_TYPES[key] === panelType,
	);
	if (!graphType) {
		return false;
	}
	return panelTypeAndGraphManagerVisibility[graphType];
};

interface UseChartMutableProps {
	panelType: string;
	panelTypeAndGraphManagerVisibility: PanelTypeAndGraphManagerVisibilityProps;
}