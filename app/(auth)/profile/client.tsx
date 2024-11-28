"use client";

import ButtonClient from "@comps/client/Button";
import InputClient from "@comps/client/Input";
import ModalClient from "@comps/client/Modal";
import Card from "@comps/server/Card";
import {
    listSessions,
    revokeOtherSessions,
    revokeSession,
    revokeSessions,
    useSession,
} from "@lib/client";
import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProfileClient() {
    const { data: session } = useSession();
    const [modalVisible, setModalVisible] = useState(true);

    type SessionList = {
        id: string;
        userId: string;
        expiresAt: Date;
        ipAddress: string | null | undefined;
        userAgent: string | null | undefined;
    };

    const [sessionList, setSessionList] = useState<SessionList[]>([]);

    useEffect(() => {
        const fetchSessions = async () => {
            const { data: getSessionList } = await listSessions();
            console.log(getSessionList);
            setSessionList(getSessionList as SessionList[]);
        };
        fetchSessions();
    }, [session]);

    return (
        <>
            <ModalClient
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                mainButtonTitle="Valider"
                mainButtonLabel="valider"
                onMainButtonClick={() => console.log("valider")}
            />
            <Card className="w-[280px] space-y-3">
                {/* TODO : ajuster les comportements lorsqu'une session est supprimée */}
                <div className="space-y-1">
                    <div className="text-xl font-bold">Session List</div>
                    <div className="flex flex-row gap-1">
                        <ButtonClient
                            type="button"
                            className="w-1/2 text-sm"
                            label="revoke-others"
                            variant="outline"
                            padding="sm"
                            onClick={async () => await revokeOtherSessions()}
                        >
                            Revoke others
                        </ButtonClient>
                        <ButtonClient
                            type="button"
                            className="w-1/2 text-sm hover:bg-red-500"
                            label="revoke-all"
                            padding="sm"
                            onClick={async () => await revokeSessions()}
                        >
                            Revoke all
                        </ButtonClient>
                    </div>
                </div>
                {sessionList.map(({ id, userAgent }, index) => (
                    <div key={index}>
                        <div className="flex flex-row gap-2 text-xs">
                            <span className="font-bold">
                                Session {index + 1}
                            </span>
                            <span className="italic text-gray-500">
                                {session?.session.id === id && "Current"}
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-1">
                            <div className="line-clamp-1 text-sm text-gray-700">
                                {userAgent}
                            </div>
                            {session?.session.id !== id && (
                                <ButtonClient
                                    type="button"
                                    variant="none"
                                    padding="none"
                                    className="p-0.5"
                                    label="revoke-current-session"
                                    onClick={async () =>
                                        await revokeSession({ id })
                                    }
                                >
                                    <CircleX className="size-5 stroke-gray-600 transition-all duration-150 hover:stroke-red-600" />
                                </ButtonClient>
                            )}
                        </div>
                    </div>
                ))}
            </Card>
            <Card className="w-[280px] space-y-3">
                <div className="text-xl font-bold">Update profile</div>
                <InputClient label="Name" placeholder={session?.user.name} />
                <ButtonClient type="button" label="update-name">
                    Update
                </ButtonClient>
            </Card>
        </>
    );
}
