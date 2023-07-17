import { OPERATORS } from 'constants/queryBuilder';
import { BaseAutocompleteData } from 'types/api/queryBuilder/queryAutocompleteResponse';
import { TagFilterItem } from 'types/api/queryBuilder/queryBuilderData';
import { DataSource, QueryBuilderData } from 'types/common/queryBuilder';

import {
	DataType,
	FORMULA,
	GraphTitle,
	LETENCY_LEGENDS_AGGREGATEOPERATOR,
	MetricsType,
	OPERATION_LEGENDS,
	QUERYNAME_AND_EXPRESSION,
	WidgetKeys,
} from '../constant';
import {
	getQueryBuilderQueries,
	getQueryBuilderQuerieswithFormula,
} from './MetricsPageQueriesFactory';

export const latency = ({
	servicename,
	tagFilterItems,
}: LatencyProps): QueryBuilderData => {
	const autocompleteData: BaseAutocompleteData[] = [
		{
			key: WidgetKeys.DurationNano,
			dataType: DataType.FLOAT64,
			isColumn: true,
			type: MetricsType.Tag,
		},
		{
			key: WidgetKeys.DurationNano,
			dataType: DataType.FLOAT64,
			isColumn: true,
			type: MetricsType.Tag,
		},
		{
			key: WidgetKeys.DurationNano,
			dataType: DataType.FLOAT64,
			isColumn: true,
			type: MetricsType.Tag,
		},
	];

	const filterItems: TagFilterItem[][] = [
		[
			{
				id: '',
				key: {
					key: WidgetKeys.ServiceName,
					dataType: DataType.STRING,
					type: MetricsType.Tag,
					isColumn: true,
				},
				op: OPERATORS['='],
				value: `${servicename}`,
			},
			...tagFilterItems,
		],
		[
			{
				id: '',
				key: {
					key: WidgetKeys.ServiceName,
					dataType: DataType.STRING,
					type: MetricsType.Tag,
					isColumn: true,
				},
				op: OPERATORS['='],
				value: `${servicename}`,
			},
			...tagFilterItems,
		],
		[
			{
				id: '',
				key: {
					key: WidgetKeys.ServiceName,
					dataType: DataType.STRING,
					type: MetricsType.Tag,
					isColumn: true,
				},
				op: OPERATORS['='],
				value: `${servicename}`,
			},
			...tagFilterItems,
		],
	];

	return getQueryBuilderQueries({
		autocompleteData,
		legends: LETENCY_LEGENDS_AGGREGATEOPERATOR,
		filterItems,
		aggregateOperator: LETENCY_LEGENDS_AGGREGATEOPERATOR,
		dataSource: DataSource.TRACES,
		queryNameAndExpression: QUERYNAME_AND_EXPRESSION,
	});
};

export const operationPerSec = ({
	servicename,
	tagFilterItems,
	topLevelOperations,
}: OperationPerSecProps): QueryBuilderData => {
	const autocompleteData: BaseAutocompleteData[] = [
		{
			key: WidgetKeys.SignozLatencyCount,
			dataType: DataType.FLOAT64,
			isColumn: true,
			type: null,
		},
	];

	const filterItems: TagFilterItem[][] = [
		[
			{
				id: '',
				key: {
					key: WidgetKeys.Service_name,
					dataType: DataType.STRING,
					isColumn: false,
					type: MetricsType.Resource,
				},
				op: OPERATORS.IN,
				value: [`${servicename}`],
			},
			{
				id: '',
				key: {
					key: WidgetKeys.Operation,
					dataType: DataType.STRING,
					isColumn: false,
					type: MetricsType.Tag,
				},
				op: OPERATORS.IN,
				value: topLevelOperations,
			},
			...tagFilterItems,
		],
	];

	return getQueryBuilderQueries({
		autocompleteData,
		legends: OPERATION_LEGENDS,
		filterItems,
		dataSource: DataSource.METRICS,
	});
};

export const errorPercentage = ({
	servicename,
	tagFilterItems,
	topLevelOperations,
}: OperationPerSecProps): QueryBuilderData => {
	const autocompleteDataA: BaseAutocompleteData = {
		key: WidgetKeys.SignozCallsTotal,
		dataType: DataType.FLOAT64,
		isColumn: true,
		type: null,
	};
	const autocompleteDataB: BaseAutocompleteData = {
		key: WidgetKeys.SignozCallsTotal,
		dataType: DataType.FLOAT64,
		isColumn: true,
		type: null,
	};
	const additionalItemsA: TagFilterItem[] = [
		{
			id: '',
			key: {
				key: WidgetKeys.Service_name,
				dataType: DataType.STRING,
				isColumn: false,
				type: MetricsType.Resource,
			},
			op: OPERATORS.IN,
			value: [`${servicename}`],
		},
		{
			id: '',
			key: {
				key: WidgetKeys.Operation,
				dataType: DataType.STRING,
				isColumn: false,
				type: MetricsType.Tag,
			},
			op: OPERATORS.IN,
			value: topLevelOperations,
		},
		{
			id: '',
			key: {
				key: WidgetKeys.StatusCode,
				dataType: DataType.INT64,
				isColumn: false,
				type: MetricsType.Tag,
			},
			op: OPERATORS.IN,
			value: ['STATUS_CODE_ERROR'],
		},
		...tagFilterItems,
	];

	const additionalItemsB: TagFilterItem[] = [
		{
			id: '',
			key: {
				key: WidgetKeys.Service_name,
				dataType: DataType.STRING,
				isColumn: false,
				type: MetricsType.Resource,
			},
			op: OPERATORS.IN,
			value: [`${servicename}`],
		},
		{
			id: '',
			key: {
				key: WidgetKeys.Operation,
				dataType: DataType.STRING,
				isColumn: false,
				type: MetricsType.Tag,
			},
			op: OPERATORS.IN,
			value: topLevelOperations,
		},
		...tagFilterItems,
	];

	return getQueryBuilderQuerieswithFormula({
		autocompleteDataA,
		autocompleteDataB,
		additionalItemsA,
		additionalItemsB,
		legend: GraphTitle.ERROR_PERCENTAGE,
		disabled: true,
		expression: FORMULA.ERROR_PERCENTAGE,
		legendFormula: GraphTitle.ERROR_PERCENTAGE,
	});
};

export interface OperationPerSecProps {
	servicename: string | undefined;
	tagFilterItems: TagFilterItem[];
	topLevelOperations: string[];
}

interface LatencyProps {
	servicename: string | undefined;
	tagFilterItems: TagFilterItem[];
}
