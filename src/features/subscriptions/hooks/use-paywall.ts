import { useGetSubscriptions } from "../api/use-get-subscriptions";
import { useSubscriptionModal } from "../store/use-subscription-modal"

export const usePaywall = () => {
    const {
        data:subscriptions,
        isLoading:isLoadingSubscriptions
    } = useGetSubscriptions();

    const subscriptionModal = useSubscriptionModal();

    const shouldBlock = isLoadingSubscriptions || !subscriptions?.active;
    return {
        isLoading: isLoadingSubscriptions,
        shouldBlock,
        triggerPaywall: ()=>{
            subscriptionModal.onOpen()
        }
    }
}