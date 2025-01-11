export type NavProps = {
  isDashboard: boolean;
  names?: string;
  type?: string;
};

export type ButtonProps = {
  onClick: () => void;
  text: string;
  className: string;
  type: "submit" | "button";
};

export type UserType = "brand" | "influencer";

export interface SignupFormData {
    name: string;
    email: string;
    userType: UserType;
    password: string;
    confirmPassword: string;
}

export interface SignupValidationErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    userType?: string;
}

export interface LoginFormData {
    email: string;
    password: string;
}

export interface LoginValidationErrors {
    email?: string;
    password?: string;
}

export interface CampaignFormData {
    title: string;
    image: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface CampaignValidationErrors {
    title?: string;
    image?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
}

export type CampaignFormProps = {
    formData: CampaignFormData;
    setFormData: React.Dispatch<React.SetStateAction<CampaignFormData>>;
    // onChange: (date: Date | null) => void;
    fieldName: "startDate" | "endDate";
};

export type CampaignComponentProps = {
    image: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    link: string;
    hasActions: boolean;
    handleShowCreateCampaign?: () => void;
}

export interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

export interface TableRows {
    title: string;
    description: string;
    submissionDate: string;
    actions: React.ReactNode;
}

export type TableProps = {
    rows: TableRows[];
};

export type SocialMedia = "instagram" | "x";

export interface ContentFormData {
    link: string;
    socialMedia: SocialMedia;
}

export interface ContentFormValidationErrors  {
    link?: string;
    socialMedia?: string;
}