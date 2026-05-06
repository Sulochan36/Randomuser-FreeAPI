type Props = {
    page: number;
    hasNext: boolean;
    hasPrev: boolean;
    onNext: () => void;
    onPrev: () => void;
};

const Pagination = ({
    page,
    hasNext,
    hasPrev,
    onNext,
    onPrev,
}: Props) => {
    return (
        <div className="flex items-center justify-center gap-4 mt-6">

            <button
                onClick={onPrev}
                disabled={!hasPrev}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
                ⬅ Prev
            </button>

            <span className="text-sm font-medium">
                Page {page}
            </span>

            <button
                onClick={onNext}
                disabled={!hasNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
            >
                Next ➡
            </button>

        </div>
    );
};

export default Pagination;