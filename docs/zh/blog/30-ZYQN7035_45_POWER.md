# ZYNQ7035、7045电源设计
------
## 1 参考文档
《*DS191：Zynq-7000 SoC (Z-7030, Z-7035, Z-7045, and Z-7100)： DC and AC Switching Characteristics Data Sheet*》

《*UG933：Zynq-7000 SoC PCB Design Guide*》

《*UG476：7Series_Transceivers*》

《*UG865：Zynq-7000 SoC Packaging and Pinout Product Specification*》

## 2 ZYNQ BANK划分
![XC7Z035, XC7Z045 Banks](.\\images\\30-1.png)
**FFG676封装：**
1. HR I/O banks 9, 10和11没有引出。
2. 所有HP I/O bank全部引出。
3. GTX Quads 109和110 没有引出。
4. 所有PS Bank全部引出。

**FFG900封装：**
1. HR I/O Bank 9部分引出。
2. 所有HP I/O Bank全部引出。
3. 所有GTX Quads全部引出。
4. 所有PS Bank全部引出。
HR和HP I/O 电压支持特征
![HR和HP I/O 电压支持特征](.\\images\\30-2.png)
![HR和HP I/O 电压支持特征](.\\images\\30-3.png)

##  3 官方建议供电电压
![官方建议供电电压](.\\images\\30-4.png)
*注意：*
*1. PS和PL电源共地；所有电压都是对地。*
*2. 详细电源分配设计请参考《UG933：Zynq-7000 SoC PCB Design Guide》。*
*3. 当PS工作频率在1GHz或者当DDR工作在1333Mb/s，VCCPINT电压范围为0.97V～1.03V。*
*4. VCCINT和 VCCBRAM使用同一电源。*
*5. VCCBATT使用比特流加密时才需要。如果不使用电池，请将 VCCBATT 接地或 VCCAUX。*


## 4 上电顺序
**PS上电时序：**

![PS上电时序](.\\images\\30-5.png)

PS VCCO包括VCCO_MIO0、VCCO_MIO1和VCCO_DDR

**PL上电时序：**
```
VCCINT->VCCBRAM->VCCAUX->VCCAUX_IO->VCCO
```
如果VCCINT和VCCBRAM使用的是同一个电源，可以同时上电；

如果VCCAUX和VCCAUX_IO、VCCO使用的是同一个电源，可以同时上电；

VCCPINT和VCCINT可以使用同一个电源，可以同时上电；

**GTX上电时序：**
```
VCCINT->VMGTAVCC->VMGTAVTT
```
或者
```
VMGTAVCC->VCCINT->VMGTAVTT
```
VMGTVCCAUX没有时序要求。

VMGTAVCC和VCCINT可以同时上电。

**VCCPLL供电设计**
![PS上电时序](.\\images\\30-6.png)

## 5 去耦电容设计
![PS上电时序](.\\images\\30-7.png)
![PS上电时序](.\\images\\30-8.png)
![PS上电时序](.\\images\\30-9.png)