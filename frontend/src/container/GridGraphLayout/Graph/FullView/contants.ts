import { PANEL_TYPES } from 'constants/queryBuilder';

export enum ColumnsTitle {
	Index = 'Index',
	Legend = 'Legend',
	Label = 'Label',
	Avg = 'Avg',
	Sum = 'Sum',
	Max = 'Max',
	Min = 'Min',
}

export const DataIndexAndKey = {
	[ColumnsTitle.Index]: 'index',
	[ColumnsTitle.Label]: 'label',
	[ColumnsTitle.Avg]: 'avg',
	[ColumnsTitle.Sum]: 'sum',
	[ColumnsTitle.Max]: 'max',
	[ColumnsTitle.Min]: 'min',
};

export const PanelTypeAndGraphManagerVisibility: {
	[key in keyof typeof PANEL_TYPES]: boolean;
} = {
	TIME_SERIES: true,
	VALUE: false,
	TABLE: false,
	LIST: false,
	TRACE: false,
	EMPTY_WIDGET: false,
};
