'use client';
import { useRouter } from 'next/navigation';
import Heading from './Heading';
import Button from './Button';

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    title = 'no exact matches',
    subtitle = 'try changing or removing some of your filters',
    showReset,
}) => {
    const router = useRouter();

    return (
        <div className="h-[68vh] flex flex-col gap-2 justify-center items-center capitalize">
            <Heading center title={title} subtitle={subtitle} />
            <div className="w-48 mt-4">
                {showReset && (
                    <Button
                        outline
                        label="remove all filters"
                        onClick={() => router.push('/')}
                    />
                )}
            </div>
        </div>
    );
};

export default EmptyState;
