"use client";
import * as React from 'react';
import { Fab, TextField, Button as ButtonMUI, styled } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@/components/Button';
import DatePickerComponent from '@/components/DatePicker';
import { CampaignFormData, CampaignValidationErrors } from '@/@types/global';
import CampaignComponent from '@/components/Campaign';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const DashboardPage = () => {
    const [formData, setFormData] = React.useState<CampaignFormData>({
        title: '',
        image: '',
        description: '',
        startDate: '',
        endDate: '',
    });
    const [errors, setErrors] = React.useState<CampaignValidationErrors>({});

    const [showCreateCampaign, setShowCreateCampaign] = React.useState(false);

    const handleShowCreateCampaign = () => setShowCreateCampaign(!showCreateCampaign);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "image" && e.target.files) {
            const file = e.target.files[0];

            if (file) {
                // Check file type (e.g., image/jpeg, image/png)
                if (!file.type.startsWith('image/')) {
                    console.log('Please upload an image file');
                    return;
                }

                // Check file size (e.g., 5MB limit)
                const maxSize = 5 * 1024 * 1024; // 5MB in bytes
                if (file.size > maxSize) {
                    console.log('File size exceeds 5MB limit');
                    return;
                }

                setFormData(prev => ({
                    ...prev,
                    [e.target.name]: file
                }));
            }
        } else {
            // Handle other input changes
            setFormData(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }));
        }
    };

    const validateForm = () => {
        const newErrors: CampaignValidationErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        } else if (formData.title.length < 2) {
            newErrors.title = 'Title must be at least 2 characters';
        }

        if (!formData.image) {
            newErrors.image = 'Image is required';
        }

        if (!formData.startDate) {
            newErrors.startDate = 'Start date is required';
        }

        if (!formData.endDate) {
            newErrors.endDate = 'End date is required';
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Form is valid', formData);
            // Proceed with form submission
        } else {
            console.log('Form has errors', errors);
        }
    };

    const handleClearForm = () => {
        setFormData({
            title: '',
            image: '',
            description: '',
            startDate: '',
            endDate: '',
        });
        setErrors({});
    };

    return (
        <div className="w-full flex items-center justify-center flex-col gap-8">
            <header className="text-center font-semibold">Campaigns</header>

            {!showCreateCampaign && (<div className="flex w-full flex-col gap-8 items-center justify-center">

                <CampaignComponent
                    title='compaign [xxxx]'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedpulvinar, nunc nec ultricies.'
                    startDate="2025/08/09"
                    endDate="2025/08/09"
                    image="./../globe.svg"
                    link={`/dashboard/brand/${"compaign [xxxx]"}`}
                    hasActions={false}
                />

                <CampaignComponent
                    title='compaign [yyyy]'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedpulvinar, nunc nec ultricies.'
                    startDate="2025/08/09"
                    endDate="2025/08/09"
                    image="./../file.svg"
                    link={`/dashboard/brand/${"compaign [yyyy]"}`}
                    hasActions={false}
                />

            </div>)}

            {showCreateCampaign && (
                <div className='flex w-5/6 flex-col gap-8 items-center justify-center'>
                    <form noValidate autoComplete="off" className='flex flex-col gap-4 p-4 max-w-[500px] mx-auto w-full'>
                        <header className='text-center font-semibold text-xl'>Create new campaign</header>

                        <TextField
                            helperText={errors.title || ""}
                            error={!!errors.title}
                            label="Title"
                            variant="outlined"
                            type='text'
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />

                        <ButtonMUI
                            component="label"
                            role={undefined}
                            variant="outlined"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            className='border !border-[#c4c4c4] h-14 bg-white hover:bg-[#f5f5f5] rounded-md !text-black/50 hover:text-[#89e81d]'
                            color={errors.image ? 'error' : 'primary'}
                        >
                            Upload files
                            <VisuallyHiddenInput
                                type="file"
                                name='image'
                                onChange={handleChange}
                                multiple
                            />
                        </ButtonMUI>
                        <small className='text-[#d3302f]'>{errors.image}</small>

                        <TextField
                            helperText={errors.description || ""}
                            error={!!errors.description}
                            label="Description"
                            variant="outlined"
                            type='text'
                            name="description"
                            multiline
                            rows={2}
                            value={formData.description}
                            onChange={handleChange}
                        />

                        <DatePickerComponent
                            formData={formData}
                            setFormData={setFormData}
                            fieldName="startDate"
                        />
                        <small className='text-[#d3302f]'>{errors.startDate}</small>

                        <DatePickerComponent
                            formData={formData}
                            setFormData={setFormData}
                            fieldName="endDate"
                        />
                        <small className='text-[#d3302f]'>{errors.endDate}</small>

                        <Button text="Save" type="button" className="bg-[#89e81d] rounded-md p-2 h-12" onClick={handleSubmit} />
                        <Button text="Clear" type="button" className="bg-white border  rounded-md p-2 h-12" onClick={handleClearForm} />

                    </form>
                </div>
            )}

            <div className="flex p-4">
                <Fab variant="extended" sx={{ textTransform: 'capitalize', width: 'fit-content', backgroundColor: '#ffffff' }} onClick={handleShowCreateCampaign}>
                    <AddIcon sx={{ mr: 1 }} className={` ${showCreateCampaign && 'rotate-45'}`} />
                    {showCreateCampaign ? " Close Form " : "Create new campaign"}
                </Fab>
            </div>
        </div>
    )
}

export default DashboardPage;