import React, { useState, useEffect, useRef } from 'react';

type RecipientsDisplayProps = {
    recipients: string[];
};

const RecipientsDisplay: React.FC<RecipientsDisplayProps> = ({ recipients }) => {
    // useRef is used to get a reference to the container div for width measurements
    const containerRef = useRef<HTMLDivElement>(null);

    // useState is used to keep track of which recipients are visible and how many are hidden
    const [visibleRecipients, setVisibleRecipients] = useState<string[]>([]);
    const [hiddenCount, setHiddenCount] = useState(0);

    // useEffect is used to recalculate visible and hidden recipients whenever the recipients list or container size changes
    useEffect(() => {
        if (!containerRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;
        let totalWidth = 0;
        let visibleCount = 0;

        // Create a canvas element to measure text width
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // If the context is null, exit the effect early
        if (!context) return;

        // Set the font for the text width measurement
        context.font = '16px Arial';

        // Loop through recipients to calculate which ones can fit within the container
        for (const recipient of recipients) {
            const textWidth = context.measureText(`${recipient}, `).width;
            const ellipsisWidth = context.measureText('... ').width;

            // Check if adding the next recipient and ellipsis exceeds the width
            if (totalWidth + textWidth + ellipsisWidth > containerWidth) {
                break;
            }

            totalWidth += textWidth;
            visibleCount++;
        }

        // Update state with visible recipients and the count of hidden recipients
        setVisibleRecipients(recipients.slice(0, visibleCount));
        setHiddenCount(recipients.length - visibleCount);
    }, [recipients, containerRef]);

    // Define styles for the container and badge
    const containerStyle = {
        color: '#333333',
        padding: '5px 10px', // Combined top/bottom and left/right padding
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-between',
    };

    const badgeStyle = {
        fontSize: '16px',
        color: '#f0f0f0',
        backgroundColor: '#666666',
        borderRadius: '3px',
        padding: '2px 5px', // Combined top/bottom and left/right padding for the badge
    };

    return (
        // Render the container with the calculated visible recipients and badge
        <div ref={containerRef} style={containerStyle}>
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {visibleRecipients.join(', ')}
            </span>
            {hiddenCount > 0 && (
                <span className="badge" style={badgeStyle}>+{hiddenCount}</span>
            )}
        </div>
    );
};

export default RecipientsDisplay;
