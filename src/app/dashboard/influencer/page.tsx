"use client";
import React from "react";
import { ContentFormData, ContentFormValidationErrors, SocialMedia } from "@/@types/global";
import { MenuItem, TextField } from "@mui/material";
import Button from "@/components/Button";
import CampaignComponent from "@/components/Campaign";

const socialMedias = [
    {
        value: 'instagram',
        label: 'Instagram'
    },
    {
        value: 'x',
        label: 'X'
    },

]
const InfluencerPage = () => {
    const [showCreateCampaign, setShowCreateCampaign] = React.useState(false);

    const handleShowCreateCampaign = () => setShowCreateCampaign(!showCreateCampaign);

    const [formData, setFormData] = React.useState<ContentFormData>({
        link: '',
        socialMedia: '' as SocialMedia,
    });
    const [errors, setErrors] = React.useState<ContentFormValidationErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors: ContentFormValidationErrors = {};

        if (!formData.link.trim()) {
            newErrors.link = 'Link is required';
        } else if (formData.link.length < 2) {
            newErrors.link = 'Name must be at least 2 characters';
        }



        if (!formData.socialMedia) {
            newErrors.socialMedia = 'Please select a user type';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

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
            link: '',
            socialMedia: '' as SocialMedia,
        });
        setErrors({});
        handleShowCreateCampaign();
    };

    return (
        <div className='flex w-5/6 flex-col gap-8 items-center justify-center'>
            <header className="text-center font-semibold">Campaigns</header>

            {!showCreateCampaign && (<div className="flex w-full flex-col gap-8 items-center justify-center">

                <CampaignComponent
                    title='compaign [xxxx]'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedpulvinar, nunc nec ultricies.'
                    startDate="2025/08/09"
                    endDate="2025/08/09"
                    image="./../globe.svg"
                    link={`/dashboard/brand/${"compaign [xxxx]"}`}
                    hasActions={true}
                    handleShowCreateCampaign={handleShowCreateCampaign}
                />

                <CampaignComponent
                    title='compaign [yyyy]'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedpulvinar, nunc nec ultricies.'
                    startDate="2025/08/09"
                    endDate="2025/08/09"
                    image="./../file.svg"
                    link={`/dashboard/brand/${"compaign [yyyy]"}`}
                    hasActions={true}
                    handleShowCreateCampaign={handleShowCreateCampaign}
                />

            </div>)}

            {showCreateCampaign && (
                <form noValidate autoComplete="off" className='flex flex-col gap-4 p-4 max-w-[500px] mx-auto w-full'>
                    <header className='text-center font-semibold text-xl'>Signup</header>
                    <TextField
                        helperText={errors.link || ""}
                        error={!!errors.link}
                        label="Link"
                        variant="outlined"
                        type='text'
                        name="name"
                        value={formData.link}
                        required
                        onChange={handleChange}
                    />

                    <TextField
                        helperText={errors.socialMedia || ""}
                        error={!!errors.socialMedia}
                        label="Social Media"
                        variant='outlined'
                        select
                        name="socialMedia"
                        value={formData.socialMedia}
                        onChange={handleChange}
                    >
                        {socialMedias.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Button text="Save" type="button" className="bg-[#89e81d] rounded-md p-2 h-12" onClick={handleSubmit} />
                    <Button text="Back" type="button" className="bg-white border  rounded-md p-2 h-12" onClick={handleClearForm} />

                </form>
            )}
        </div>)
}
export default InfluencerPage;