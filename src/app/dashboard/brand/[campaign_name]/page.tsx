"use client";
import React from "react";
import { Box, Drawer, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import TableComponent from "@/components/Table";
import { TableRows, TabPanelProps } from "@/@types/global";

function createData(title: string, description: string, submissionDate: string, actions: React.ReactNode) {
    return { title, description, submissionDate, actions };
}

const rows: TableRows[] = [
    createData(
        'Frozen yoghurt',
        'Delicious dessert',
        '2024-01-11',
        <div className="flex gap-4">
            <button type="button" className="bg-[#89e81d] rounded-full py-2 px-4">Approve</button>
            <button type="button" className="text-white bg-red-500 rounded-full py-2 px-4">Reject</button>
        </div>
    ),
    createData(
        'Ice cream sandwich',
        'Classic favorite',
        '2024-01-11',
        <div className="flex gap-4">
            <button type="button" className="bg-[#89e81d] rounded-full py-2 px-4">Approve</button>
            <button type="button" className="text-white bg-red-500 rounded-full py-2 px-4">Reject</button>
        </div>
    ),
    createData(
        'Eclair',
        'French pastry',
        '2024-01-11',
        <div className="flex gap-4">
            <button type="button" className="bg-[#89e81d] rounded-full py-2 px-4">Approve</button>
            <button type="button" className="text-white bg-red-500 rounded-full py-2 px-4">Reject</button>
        </div>
    ),
    createData(
        'Cupcake',
        'Sweet treat',
        '2024-01-11',
        <div className="flex gap-4">
            <button type="button" className="text-white bg-red-500 rounded-full py-2 px-4">Approve</button>
            <button type="button" className="bg-[#89e81d] rounded-md p-2">Reject</button>
        </div>
    ),
];

const TabPanel:React.FC<TabPanelProps> = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>{children}</Box>
            )}
        </div>
    );
}

type Anchor = 'right';

const BrandCampaignsPage = () => {
    const [state, setState] = React.useState({
        right: false,
    });

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log('newValue', newValue);
        setValue(newValue);
    };

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    return (
        <div className='flex w-full flex-col my-16 items-center justify-center'>

            <div className="flex flex-col gap-4 p-2 border rounded-md w-5/6">

                <div className="flex flex-col gap-8">
                    <header className='font-semibold text-xl'>Campaign [xxxx]</header>
                    <Image
                        aria-hidden
                        src="./../../globe.svg"
                        alt="Globe icon"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-8">
                            <Typography variant="subtitle1" className="px-2 border border-[#89e81d] rounded-md">Started date: 2025/08/09</Typography>
                            <Typography variant="subtitle1" className="px-2 border border-[#89e81d] rounded-md">End date: 2025/08/09</Typography>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            pulvinar, nunc nec ultricies.
                        </p>
                        <Typography variant="subtitle1" className="w-fit cursor-pointer hover:underline" onClick={toggleDrawer('right', true)}>View Campaign</Typography>
                    </div>
                </div>
            </div>

            {(['right'] as const).map(anchor => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <div className="p-4">

                            <Box className="w-full ">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                    aria-label="secondary tabs example"
                                >
                                    <Tab value={0} label="Name [xxxx1]" />
                                    <Tab value={1} label="Name [xxxx2]" />
                                    <Tab value={2} label="Name [xxxx3]" />
                                </Tabs>

                                <TabPanel value={value} index={0} >
                                    <TableComponent rows={rows} />
                                </TabPanel>
                                <TabPanel value={value} index={1} >
                                    <TableComponent rows={rows} />
                                </TabPanel>
                                <TabPanel value={value} index={2} >
                                    <TableComponent rows={rows} />
                                </TabPanel>
                            </Box>

                        </div>
                    </Drawer>
                </React.Fragment>))}
        </div>
    );
}

export default BrandCampaignsPage;