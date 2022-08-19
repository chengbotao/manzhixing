/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

import { flatToTree } from './index';

describe('flatToTree module', () => {
  const provinceFlat = [
    {
      id: '1000',
      label: '湖北省',
    },
    {
      id: '1200',
      value: '江苏省',
      label: '江苏省',
    },
    {
      id: '1001',
      pid: '1000',
      label: '武汉',
    },
    {
      id: '1020',
      pid: '1000',
      label: '咸宁',
    },
    {
      id: '1022',
      pid: '1000',
      label: '孝感',
    },
    {
      id: '1034',
      pid: '1000',
      label: '襄阳',
    },
    {
      id: '1003',
      pid: '1000',
      label: '宜昌',
    },
    {
      id: '1201',
      pid: '1200',
      label: '南京',
    },
    {
      id: '1202',
      pid: '1200',
      label: '苏州',
    },
    {
      id: '1204',
      pid: '1200',
      label: '扬州',
    },
    {
      id: '100101',
      pid: '1001',
      label: '洪山区',
    },
    {
      id: '100102',
      pid: '1001',
      label: '武昌区',
    },
    {
      id: '100103',
      pid: '1001',
      label: '汉阳区',
    },
  ];
  test('平铺转树', () => {
    expect(flatToTree(provinceFlat)).toEqual([
      {
        id: '1000',
        label: '湖北省',
        children: [
          {
            id: '1001',
            pid: '1000',
            label: '武汉',
            children: [
              { id: '100101', pid: '1001', label: '洪山区' },
              { id: '100102', pid: '1001', label: '武昌区' },
              { id: '100103', pid: '1001', label: '汉阳区' },
            ],
          },
          { id: '1020', pid: '1000', label: '咸宁' },
          { id: '1022', pid: '1000', label: '孝感' },
          { id: '1034', pid: '1000', label: '襄阳' },
          { id: '1003', pid: '1000', label: '宜昌' },
        ],
      },
      {
        id: '1200',
        value: '江苏省',
        label: '江苏省',
        children: [
          { id: '1201', pid: '1200', label: '南京' },
          { id: '1202', pid: '1200', label: '苏州' },
          { id: '1204', pid: '1200', label: '扬州' },
        ],
      },
    ]);
  });
});
