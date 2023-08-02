import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { ColumnType } from 'antd/es/table';
import { ChartData } from 'chart.js';

import { ColumnsKeyAndDataIndex, ColumnsTitle } from '../contants';
import { DataSetProps } from '../types';
import { getCheckBox } from './GetCheckBox';
import { getLabel } from './GetLabel';

export const getGraphManagerTableColumns = ({
	data,
	checkBoxOnChangeHandler,
	graphVisibilityState,
	labelClickedHandler,
	yAxisUnit,
}: GetGraphManagerTableColumnsProps): ColumnType<DataSetProps>[] => [
	{
		title: '',
		width: 50,
		dataIndex: ColumnsKeyAndDataIndex.Index,
		key: ColumnsKeyAndDataIndex.Index,
		...getCheckBox({
			checkBoxOnChangeHandler,
			graphVisibilityState,
			data,
		}),
	},
	{
		title: ColumnsTitle[ColumnsKeyAndDataIndex.Label],
		width: 300,
		dataIndex: ColumnsKeyAndDataIndex.Label,
		key: ColumnsKeyAndDataIndex.Label,
		...getLabel(labelClickedHandler),
	},
	{
		title: `${ColumnsTitle[ColumnsKeyAndDataIndex.Avg]} ${
			yAxisUnit ? `(in ${yAxisUnit})` : ''
		}`,
		width: 90,
		dataIndex: ColumnsKeyAndDataIndex.Avg,
		key: ColumnsKeyAndDataIndex.Avg,
	},
	{
		title: `${ColumnsTitle[ColumnsKeyAndDataIndex.Sum]} ${
			yAxisUnit ? `(in ${yAxisUnit})` : ''
		}`,
		width: 90,
		dataIndex: ColumnsKeyAndDataIndex.Sum,
		key: ColumnsKeyAndDataIndex.Sum,
	},
	{
		title: `${ColumnsTitle[ColumnsKeyAndDataIndex.Max]} ${
			yAxisUnit ? `(in ${yAxisUnit})` : ''
		}`,
		width: 90,
		dataIndex: ColumnsKeyAndDataIndex.Max,
		key: ColumnsKeyAndDataIndex.Max,
	},
	{
		title: `${ColumnsTitle[ColumnsKeyAndDataIndex.Min]} ${
			yAxisUnit ? `(in ${yAxisUnit})` : ''
		}`,
		width: 90,
		dataIndex: ColumnsKeyAndDataIndex.Min,
		key: ColumnsKeyAndDataIndex.Min,
	},
];

interface GetGraphManagerTableColumnsProps {
	data: ChartData;
	checkBoxOnChangeHandler: (e: CheckboxChangeEvent, index: number) => void;
	labelClickedHandler: (labelIndex: number) => void;
	graphVisibilityState: boolean[];
	yAxisUnit?: string;
}
