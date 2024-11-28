"use client";

import Card from "@comps/server/Card";
import ButtonClient from "./Button";

type ModalClientProps = {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    mainButtonTitle: string;
    mainButtonLabel: string;
    onMainButtonClick: () => void;
};

export default function ModalClient(props: ModalClientProps) {
    const {
        modalVisible,
        setModalVisible,
        mainButtonTitle,
        mainButtonLabel,
        onMainButtonClick,
    } = props;

    if (!modalVisible) return null;

    return (
        <div className="absolute left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center">
            <button
                type="button"
                aria-label={mainButtonLabel}
                onClick={() => setModalVisible(false)}
                className="absolute left-0 top-0 z-50 h-screen w-screen bg-black opacity-50"
            />
            <Card className="relative z-50 bg-white opacity-100">
                <h2>Modal</h2>
                <ButtonClient type="button" label={mainButtonLabel} onClick={onMainButtonClick}>
                    {mainButtonTitle}
                </ButtonClient>
            </Card>
        </div>
    );
}
